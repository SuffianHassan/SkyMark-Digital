"use client";

import { fetchPages } from "@/components/services/PageService";
import { useEffect, useState } from "react";
import PageSection from "../../PageSection";



const Page = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");


  useEffect(() => {
    const loadPages = async () => {
      const fetchedPages = await fetchPages();
      setPages(fetchedPages);
      if (fetchedPages.length > 0) {
        setActiveTab(fetchedPages[0].id);
      }
    };
    loadPages();
  }, []);


  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      background: "#f3f3f3",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      padding: "20px",
      color: "000"
    },
    tabsNav: {
      display: "flex",
      overflowX: "auto",
      borderBottom: "1px solid #E5E7EB",
      marginBottom: "20px",
    },
    tabsInner: {
      display: "flex",
      gap: "15px",
      minWidth: "50%",
    },
    tabBtn: {
        width: "100%",
        padding: "8px 10px",
        borderRadius: 8,
        border: "1px solid #ccc", // light border for contrast
        background: "#fff",        // white input bg
        color: "#000",             // black text
        fontSize: 13,      
    },
    activeTab: {
      color: "#2563EB",
      borderBottom: "3px solid #2563EB",
    },
    empty: {
      padding: "20px",
      color: "#64748B",
    },
  };


  return (
    // <Layout >
      <div style={styles.wrapper}>
        {/* Page Tabs */}
        <nav style={styles.tabsNav}>
          <div style={styles.tabsInner}>
            {pages.length === 0 ? (
              <p style={styles.empty}>No pages found</p>
            ) : (
              pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setActiveTab(page.id)}
                  style={{
                    ...styles.tabBtn,
                    ...(activeTab === page.id ? styles.activeTab : {}),
                  }}
                >
                  {page.title}
                </button>
              ))
            )}
          </div>
        </nav>


        {/* Page Sections */}
        {activeTab && <PageSection page={activeTab} />}
      </div>
    // </Layout>
  );
};


export default Page;
