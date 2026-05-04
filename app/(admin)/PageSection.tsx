"use client";

import { db } from "@/components/services/firebase.config";
import { fetchSections } from "@/components/services/PageService";
import { collection, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type MediaItem = {
  id: string;
  name: string;
  url: string;
  type: string;
  altText?: string;
};


function PageSection({ page }: { page: string }) {
  const [sections, setSections] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [media, setMedia] = useState<MediaItem[]>([]);


  useEffect(() => {
    const loadSections = async () => {
      const fetched = await fetchSections(page);
      setSections(fetched);
      if (fetched.length > 0) setActiveTab(fetched[0].id);
    };
    loadSections();
  }, [page]);


  useEffect(() => {
    const loadMedia = async () => {
      const snapshot = await getDocs(collection(db, "media"));
      setMedia(
        snapshot.docs.map((d) => ({
          id: d.id,
          name: d.data().fileName || "",
          url: d.data().mediaUrl || "",
          type: d.data().mediaType || "",
          altText: d.data().altText || "",
        }))
      );
    };
    loadMedia();
  }, []);


  const styles: Record<string, React.CSSProperties> = {
    sectionTabs: {
      display: "flex",
      overflowX: "auto",
      gap: "8px",
      borderBottom: "1px solid #E5E7EB",
      marginBottom: "20px",
    },
    tabBtn: {
      padding: "8px 14px",
      fontSize: "0.85rem",
      fontWeight: 600,
      border: "none",
      background: "transparent",
      borderBottom: "3px solid transparent",
      cursor: "pointer",
      color: "#64748B",
    },
    activeTab: {
      color: "#2563EB",
      borderBottom: "3px solid #2563EB",
    },
    editorCard: {
      background: "#FFFFFF",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "16px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: 600,
      marginBottom: "6px",
      color: "#0F172A",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #CBD5E1",
      fontSize: "0.9rem",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #CBD5E1",
      fontSize: "0.9rem",
      resize: "vertical",
    },
    imagePreview: {
      width: "120px",
      borderRadius: "8px",
      border: "1px solid #CBD5E1",
      marginBottom: "8px",
    },
    saveBtn: {
      marginTop: "20px",
      padding: "12px 20px",
      background: "#00407d",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "10px",
      fontWeight: 600,
      cursor: "pointer",
    },
  };


  const handleChange = (
    sectionId: string,
    blockId: string,
    value: any,
    field = "text"
  ) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              content: s.content.map((b: any) =>
                b.id === blockId ? { ...b, [field]: value } : b
              ),
            }
          : s
      )
    );
  };


  const saveSection = async (id: string) => {
    const section = sections.find((s) => s.id === id);
    if (!section) return;


    await updateDoc(doc(db, "pages", page, "sections", id), {
      content: section.content,
      updatedAt: serverTimestamp(),
    });


    toast.success("Section is updated successfully");
  };


  const activeSection = sections.find((s) => s.id === activeTab);
  if (!activeSection) return null;


  return (
    <>
      {/* Section Tabs */}
      <nav style={styles.sectionTabs}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            style={{
              ...styles.tabBtn,
              ...(activeTab === s.id ? styles.activeTab : {}),
            }}
          >
            {s.title}
          </button>
        ))}
      </nav>


      {/* Editor */}
      {activeSection.content
        .sort((a: any, b: any) => a.order - b.order)
        .map((item: any) => (
          <div key={item.id} style={styles.editorCard}>
            <div style={styles.label}>
              {item.type.toUpperCase()} #{item.order}
            </div>


            {item.type === "heading" && (
              <input
                style={styles.input}
                value={item.text}
                onChange={(e) =>
                  handleChange(activeSection.id, item.id, e.target.value)
                }
              />
            )}


            {item.type === "paragraph" && (
              <textarea
                style={styles.textarea}
                rows={4}
                value={item.text}
                onChange={(e) =>
                  handleChange(activeSection.id, item.id, e.target.value)
                }
              />
            )}


            {item.type === "image" && (
              <>
                {item.imageId && (
                  <img
                    src={media.find((m) => m.id === item.imageId)?.url}
                    style={styles.imagePreview}
                  />
                )}
                <select
                  style={styles.input}
                  value={item.imageId || ""}
                  onChange={(e) =>
                    handleChange(
                      activeSection.id,
                      item.id,
                      e.target.value,
                      "imageId"
                    )
                  }
                >
                  <option value="">Select image</option>
                  {media.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.altText || m.name}
                    </option>
                  ))}
                </select>
              </>
            )}


            {item.type === "bulletList" && (
              <textarea
                style={styles.textarea}
                rows={4}
                value={Array.isArray(item.text) ? item.text.join("\n") : ""}
                onChange={(e) =>
                  handleChange(
                    activeSection.id,
                    item.id,
                    e.target.value.split("\n"),
                    "text"
                  )
                }
              />
            )}
          </div>
        ))}


      <button
        style={styles.saveBtn}
        onClick={() => saveSection(activeSection.id)}
      >
        Save Changes
      </button>
    </>
  );
}


export default PageSection;
