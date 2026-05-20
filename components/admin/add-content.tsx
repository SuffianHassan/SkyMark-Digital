"use client";

import { MediaItem } from "@/app/context/ContentContext";
import { db } from "@/components/services/firebase.config";
import { addPage, addSection, getPages } from "@/components/services/PageService";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



const AddContent: React.FC = () => {
  const [pageSlug, setPageSlug] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageId, setPageId] = useState<string | null>(null);


  const [allPages, setAllPages] = useState<{ id: string; slug: string; title: string }[]>([]);


  const [sections, setSections] = useState<
    { id: string; title: string; type: string; order: number; content: { id: string; type: string; text?: string | string[]; order: number; imageId?: string }[] }[]
  >([]);


  const [existingSections, setExistingSections] = useState<Section[]>([]);


  const [mediaOptions, setMediaOptions] = useState<MediaItem[]>([]);


  useEffect(() => {
    const fetchPages = async () => {
      const pages = await getPages();
      setAllPages(pages);
    };
    fetchPages();
  }, []);


  useEffect(() => {
    const loadMedia = async () => {
      const snapshot = await getDocs(collection(db, "media"));
      const items: MediaItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        fileName: doc.data().fileName,
        mediaUrl: doc.data().mediaUrl,
        mediaType: doc.data().mediaType,
        altText: doc.data().altText || ""
      }));
      setMediaOptions(items);
    };
    loadMedia();
  }, []);


  // Add Page
  const handleAddPage = async () => {
    if (!pageSlug || !pageTitle) return alert("Please enter slug and title");


    try {
      const id = await addPage(pageSlug, pageTitle);
      setPageId(id);
      toast.success("Page has been created!");
      const pages = await getPages();
      setAllPages(pages);
    } catch (err) {
      console.error(err);
      toast.error("Error creating page");
    }
  };


  // First define types somewhere in your file
  type HeadingBlock = {
    id: string;
    type: "heading";
    text: string;
    order: number;
  };


  type ParagraphBlock = {
    id: string;
    type: "paragraph";
    text: string;
    order: number;
  };


  type ImageBlock = {
    id: string;
    type: "image";
    imageId: string;
    order: number;
  };


  type BulletListBlock = {
    id: string;
    type: "bulletList";
    text: string[];
    order: number;
  };


  type ContentBlock = HeadingBlock | ParagraphBlock | ImageBlock | BulletListBlock;


  type Section = {
    id: string;
    title: string;
    type: string;
    order: number;
    content: ContentBlock[];
  };


  const addContentBlockUI = (
    sectionIndex: number,
    type: "heading" | "paragraph" | "image" | "bulletList"
  ) => {
    const updated = [...sections];


    const existingCount = updated[sectionIndex].content.filter(
      (c) => c.type === type
    ).length;


    let newBlock: ContentBlock;


    if (type === "image") {
      newBlock = {
        id: `${type}${existingCount + 1}`,
        type,
        imageId: "",
        order: updated[sectionIndex].content.length + 1,
      };
    } else if (type === "bulletList") {
      newBlock = {
        id: `${type}${existingCount + 1}`,
        type,
        text: [], // ✅ array of bullet strings
        order: updated[sectionIndex].content.length + 1,
      };
    } else {
      newBlock = {
        id: `${type}${existingCount + 1}`,
        type,
        text: "",
        order: updated[sectionIndex].content.length + 1,
      };
    }


    updated[sectionIndex].content.push(newBlock);
    setSections(updated);
  };






  const addSectionUI = () => {
    setSections([
      ...sections,
      {
        id: "",
        title: "",
        type: "",
        order: sections.length + 1,
        content: [],
      },
    ]);
  };
  const handleSaveSections = async () => {
    if (!pageId) return toast.error("Please create/select a page first!");


    try {
      for (const sec of sections) {
        if (sec.id) {
          await setDoc(doc(db, "pages", pageId, "sections", sec.id), sec);
        } else {
          await addSection(pageId, sec.title, sec.type, sec.order, sec.content);
        }
      }
      toast.success("Section/s Saved!");
      setSections([]);
      const snapshot = await getDocs(collection(db, "pages", pageId, "sections"));
      setExistingSections(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Section[]);
    } catch (err) {
      console.error(err);
      toast.error("Error saving sections");
    }
  };


  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      padding: "30px",
      color: "#000",       // text black globally
      background: "#f3f3f3", // light grey panel background
    },    
 
    pageTitle: { fontSize: 28, fontWeight: 700, marginBottom: 25, color: "#000" },
 
    card: {
      background: "#006941", // card color
      borderRadius: 14,
      padding: 14,
      marginTop: 15,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)", // softer shadow for light bg
      color: "#fff", // text inside cards black
    },
   
 
    cardTitle: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 20,
    },
 
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
    },
 
    label: {
      fontSize: 13,
      opacity: 0.8,
      marginBottom: 6,
      display: "block",
    },
 
    input: {
      width: "90%",
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #1f2a44",
      background: "#fff",
      color: "#000",
    },
 
    textarea: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: 8,
      border: "1px solid #ccc", // light border for contrast
      background: "#fff",        // white input bg
      color: "#000",             // black text
      fontSize: 13,
    },
   
    select: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: 8,
      border: "1px solid #ccc", // light border for contrast
      background: "#fff",        // white input bg
      color: "#000",             // black text
      fontSize: 13,
    },
   
    sectionCard: {
      background: "#08101f",
      padding: 20,
      borderRadius: 12,
      marginTop: 20,
    },
 
    blockRow: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 12,
    },
 
    blockType: {
      width: 90,
      textTransform: "capitalize",
      fontSize: 13,
      opacity: 0.9,
      color: "#fff",
      fontWeight: 600,  
    },
 
    imagePreview: {
      width: 70,
      height: 70,
      borderRadius: 8,
      objectFit: "cover",
    },
 
    actions: {
      display: "flex",
      gap: 10,
      marginTop: 15,
      flexWrap: "wrap",
    },
 
    primaryBtn: {
      padding: "10px 16px",
      borderRadius: 8,
      background: "#00407d",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      flex: 1,             // take equal width
      textAlign: "center",
      marginRight: 10,
      marginTop: 10     // spacing between buttons
    },
   
    secondaryBtn: {
      padding: "10px 16px",
      borderRadius: 8,
      background: "#16a34a",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      flex: 1,             // take equal width
      textAlign: "center",
    },    
 
    grayBtn: {
      padding: "6px 12px",
      borderRadius: 6,
      background: "#1f2937",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  };
 
  return (
    // <Layout>
      <div style={styles.wrapper}>
        <h1 style={styles.pageTitle}>Content Management</h1>
 
        {/* Page Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Page Setup</h2>
 
          <div style={styles.grid}>
            {/* Existing Page */}
            <div>
              <label style={styles.label}>Select Existing Page</label>
              <select
                style={styles.select}
                value={pageId ?? ""}
                onChange={async (e) => {
                  const selected = allPages.find((p) => p.id === e.target.value);
                  if (!selected) return;
 
                  setPageId(selected.id);
                  setPageSlug(selected.slug);
                  setPageTitle(selected.title);
 
                  const snapshot = await getDocs(
                    collection(db, "pages", selected.id, "sections")
                  );
 
                  const secs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })) as Section[];
 
                  setExistingSections(secs);
                  setSections([]);
                }}
              >
                <option value="">— Select Page —</option>
                {allPages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
 
            {/* Create Page */}
            <div>
              <label style={styles.label}>Create New Page</label>
              <input
                style={styles.input}
                placeholder="Page Slug"
                value={pageSlug}
                onChange={(e) => setPageSlug(e.target.value)}
              />
              <input
                style={{ ...styles.input, marginTop: 10 }}
                placeholder="Page Title"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
              <button style={styles.primaryBtn} onClick={handleAddPage}>
                Create Page
              </button>
            </div>
          </div>
        </div>
 
        {/* Sections */}
        {pageId && (
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Sections Editor</h2>
 
            {existingSections.length > 0 && (
              <select
                style={styles.select}
                value={sections[0]?.id ?? ""}
                onChange={(e) => {
                  const selected = existingSections.find(
                    (s) => s.id === e.target.value
                  );
                  setSections(selected ? [selected] : []);
                }}
              >
                <option value="">— Select Section —</option>
                {existingSections.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            )}
 
            {sections.map((section, sIndex) => (
              <div key={sIndex} style={styles.sectionCard}>
                <input
                  style={styles.input}
                  placeholder="Section Title"
                  value={section.title}
                  onChange={(e) => {
                    const updated = [...sections];
                    updated[sIndex].title = e.target.value;
                    updated[sIndex].type = e.target.value;
                    setSections(updated);
                  }}
                />
 
                {section.content.map((block, bIndex) => (
                  <div key={block.id} style={styles.blockRow}>
                    <span style={styles.blockType}>{block.type}</span>
 
                    {block.type === "image" ? (
                      <>
                        <select
                          style={styles.select}
                          value={block.imageId || ""}
                          onChange={(e) => {
                            const updated = [...sections];
                            updated[sIndex].content[bIndex].imageId = e.target.value;
                            setSections(updated);
                          }}
                        >
                          <option value="">Select Image</option>
                          {mediaOptions.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.altText || m.fileName}
                            </option>
                          ))}
                        </select>
 
                        {block.imageId && (
                          <img
                            src={
                              mediaOptions.find((m) => m.id === block.imageId)
                                ?.mediaUrl
                            }
                            style={styles.imagePreview}
                          />
                        )}
                      </>
                    ) : block.type === "bulletList" ? (
                      <textarea
                        style={styles.textarea}
                        value={
                          Array.isArray(block.text)
                            ? block.text.join("\n")
                            : ""
                        }
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[sIndex].content[bIndex].text = e.target.value
                            .split("\n")
                            .filter(Boolean);
                          setSections(updated);
                        }}
                      />
                    ) : (
                      <input
                        style={styles.input}
                        value={block.text}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[sIndex].content[bIndex].text = e.target.value;
                          setSections(updated);
                        }}
                      />
                    )}
                  </div>
                ))}
 
                <div style={styles.actions}>
                  <button onClick={() => addContentBlockUI(sIndex, "heading")} style={styles.grayBtn}>+ Heading</button>
                  <button onClick={() => addContentBlockUI(sIndex, "paragraph")} style={styles.grayBtn}>+ Paragraph</button>
                  <button onClick={() => addContentBlockUI(sIndex, "image")} style={styles.grayBtn}>+ Image</button>
                  <button onClick={() => addContentBlockUI(sIndex, "bulletList")} style={styles.grayBtn}>+ Bullet</button>
                </div>
              </div>
            ))}
 
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button style={styles.secondaryBtn} onClick={addSectionUI}>
                + Add Section
              </button>


              <button style={styles.primaryBtn} onClick={handleSaveSections}>
                Save Sections
              </button>
             </div>
          </div>
        )}
      </div>
    // </Layout>  


  );
};


export default AddContent;
