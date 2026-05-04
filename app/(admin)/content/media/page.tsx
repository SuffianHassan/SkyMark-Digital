"use client";

import { db } from "@/components/services/firebase.config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

type MediaItem = {
  id: string;
  name: string;
  url: string;
  type: string;
  altText?: string;
};


const Media = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const loadMedia = async () => {
      setIsLoading(true)
      const snapshot = await getDocs(collection(db, "media"));
      const items: MediaItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().fileName,
        url: doc.data().mediaUrl,
        type: doc.data().mediaType,
        altText: doc.data().altText || ""
      }));
      setMediaList(items);
      setIsLoading(false)
    };
    loadMedia();
  }, []);


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;


    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);


    const tempId = `temp-${Date.now()}`;
    setMediaList((prev) => [
      {
        id: tempId,
        name: file.name,
        url: previewUrl,
        type: file.type,
        altText: ""
      },
      ...prev
    ]);


    const formData = new FormData();
    formData.append("file", file);


    try {
      const res = await fetch("https://steak.dhsdigitals.com/media/upload.php", {


        method: "POST",
        body: formData
      });


      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      const uploadedUrl = data.url;


      const docRef = await addDoc(collection(db, "media"), {
        fileName: file.name,
        mediaUrl: uploadedUrl,
        mediaType: file.type,
        altText: file.name,
      });


      setMediaList((prev) =>
        prev.map((item) =>
          item.id === tempId
            ? { id: docRef.id, name: file.name, url: uploadedUrl, type: file.type, altText: "" }
            : item
        )
      );
    } catch (err) {
      console.error("Error uploading file", err);
      setMediaList((prev) => prev.filter((item) => item.id !== tempId)); // remove preview on fail
    } finally {
      e.target.value = "";
    }
  };


  const handleAltTextChange = async (id: string, value: string) => {
    setMediaList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, altText: value } : item))
    );


    try {
      await updateDoc(doc(db, "media", id), { altText: value });
    } catch (err) {
      console.error("Error updating altText", err);
    }
  };


  const handleDelete = async (id: string, url: string) => {
    try {
      const filename = url.split("/").pop(); // get file name from URL
      await fetch(`https://steak.dhsdigitals.com/media/delete.php?file=${filename}`, { method: "POST" });


      await deleteDoc(doc(db, "media", id));


      setMediaList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error deleting media", err);
    }
  };


  const handleUploadClick = () => fileInputRef.current?.click();


  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      padding: "30px",
      color: "#fff",
      // backgroundColor: "f3f3f3"
    },


    pageTitle: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 25,
      color: "#000"
    },


    uploadBar: {
      marginBottom: 25,
    },


    primaryBtn: {
      padding: "10px 18px",
      borderRadius: 10,
      background: "#00407d",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: 500,
    },


    loaderWrap: {
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },


    spinner: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      border: "3px solid #2563eb",
      borderTopColor: "transparent",
      animation: "spin 1s linear infinite",
    },


    emptyText: {
      opacity: 0.6,
    },


    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 20,
    },


    mediaCard: {
      background: "#1ca3d9", // card color
      borderRadius: 14,
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)", // softer shadow for light bg
      color: "#000", // text inside cards black
    },


    previewImage: {
      width: "100%",
      height: 150,
      objectFit: "contain",
      borderRadius: 10,
      background: "#08101f",
    },


    previewMedia: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      background: "#000",
    },


    input: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: 8,
      border: "1px solid #ccc", // light border for contrast
      background: "#fff",        // white input bg
      color: "#000",             // black text
      fontSize: 13,
    },


    fileName: {
      fontSize: 12,
      opacity: 0.7,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },


    deleteBtn: {
      marginTop: "auto",
      background: "transparent",
      color: "#ef4444",
      border: "none",
      cursor: "pointer",
      fontSize: 13,
      alignSelf: "flex-start",
    },
  };


  return (
    // <Layout>
    <div style={styles.wrapper}>
      <h1 style={styles.pageTitle}>Media Library</h1>


      {/* Upload */}
      <div style={styles.uploadBar}>
        <button onClick={handleUploadClick} style={styles.primaryBtn}>
          Upload Media
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept="image/*,video/*,audio/*"
        />
      </div>


      {/* Media Grid */}
      {isLoading ? (
        <div style={styles.loaderWrap}>
          <div style={styles.spinner}></div>
        </div>
      ) : mediaList.length === 0 ? (
        <p style={styles.emptyText}>No media uploaded yet.</p>
      ) : (
        <div style={styles.grid}>
          {mediaList.map(({ id, name, url, type, altText }) => (
            <div key={id} style={styles.mediaCard}>
              {/* Preview */}
              {type.startsWith("image/") && (
                <img src={url} alt={name} style={styles.previewImage} />
              )}


              {type.startsWith("video/") && (
                <video src={url} controls style={styles.previewMedia} />
              )}


              {type.startsWith("audio/") && (
                <audio controls style={{ width: "100%" }}>
                  <source src={url} type={type} />
                </audio>
              )}


              {/* Alt Text */}
              <input
                type="text"
                value={altText || ""}
                placeholder="Alt text"
                onChange={(e) => handleAltTextChange(id, e.target.value)}
                style={styles.input}
              />


              {/* Filename */}
              <div style={styles.fileName} title={name}>
                {name}
              </div>


              {/* Delete */}
              <button
                onClick={() => handleDelete(id, url)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    // </Layout>
  );
};


export default Media;
