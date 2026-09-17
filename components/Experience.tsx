"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/experience.css";
import {
  allExperiences,
  certificationCards,
  extracurricularCards,
  workExperiences,
} from "@/data/experienceData";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "extracurricular" | "certification">("all");

  const renderLink = (
    link: { label: string; url: string; secondary?: boolean },
    index: number
  ) => (
    <a
      key={`${link.label}-${index}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: 1,
        padding: "12px",
        background: link.secondary ? "transparent" : "#003366",
        color: link.secondary ? "#003366" : "white",
        textDecoration: "none",
        border: link.secondary ? "2px solid #003366" : "none",
        borderRadius: "10px",
        fontWeight: 700,
        fontSize: "0.85em",
        textAlign: "center",
        transition: "all 0.4s ease",
      }}
      onMouseOver={(e) => {
        if (link.secondary) {
          e.currentTarget.style.background = "#003366";
          e.currentTarget.style.color = "white";
        } else {
          e.currentTarget.style.background = "#002244";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseOut={(e) => {
        if (link.secondary) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#003366";
        } else {
          e.currentTarget.style.background = "#003366";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {link.label}
    </a>
  );

  const renderExperienceItem = (item: (typeof allExperiences)[number], index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`container ${item.side}`}
    >
      <div
        className="cert-box"
        style={{
          border: "1px solid #d1d5db",
          padding: "30px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)",
          boxShadow: "0 15px 35px rgba(0, 51, 102, 0.1)",
        }}
      >
        <div
          className="tag"
          style={{
            display: "inline-block",
            padding: "6px 15px",
            background: item.tagBg,
            color: item.tagColor,
            borderRadius: "50px",
            fontWeight: 800,
            fontSize: "0.75em",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0, 51, 102, 0.2)",
          }}
        >
          {item.tag}
        </div>
        <div className="desc">
          <h3 style={{ margin: "0 0 10px", color: "#1a1a1a", fontSize: "1.5em", fontWeight: 800 }}>
            {item.company}
          </h3>
          <h4 style={{ margin: "0 0 15px", color: item.tagBg, fontSize: "0.95em", fontWeight: 700 }}>
            {item.role} | {item.period}
          </h4>
          <p style={{ fontSize: "0.95em", color: "#444", lineHeight: 1.7, marginBottom: "25px" }}>
            {item.description}
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {item.links.map(renderLink)}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const allTabCards = [...extracurricularCards, ...certificationCards];

  const renderCard = (card: (typeof certificationCards)[number]) => (
    <div
      key={card.id}
      className="cert-box"
      style={{
        border: "1px solid #e2e8f0",
        padding: "20px",
        borderRadius: "16px",
        textAlign: "center",
        width: "100%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid #f1f5f9",
            marginBottom: "16px",
            aspectRatio: "4 / 3",
            width: "100%",
            background: "#f8fafc",
            flexShrink: 0,
          }}
        >
          <img
            src={card.image}
            alt={card.alt}
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: "4 / 3",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
        <h3 style={{ margin: "0 0 4px", color: card.accent, fontSize: "1.35em", fontWeight: 800 }}>
          {card.title}
        </h3>
        <h4 style={{ margin: "0 0 8px", color: "#1e293b", fontSize: "1.05em" }}>{card.subtitle}</h4>
        <p style={{ margin: "0 0 12px", fontSize: "0.88em", color: "#475569", lineHeight: 1.5 }}>
          {card.description}
        </p>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
        {card.links.map((link, index) => (
          <a
            key={`${card.id}-${link.label}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "11px",
              background: card.accent,
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.85em",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience-section">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="experience-buttons">
        <button
          className={`exp-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <i className="fas fa-th-large"></i> All Experience
        </button>
        <button
          className={`exp-btn ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          <i className="fas fa-briefcase"></i> Work
        </button>
        <button
          className={`exp-btn ${activeTab === "extracurricular" ? "active" : ""}`}
          onClick={() => setActiveTab("extracurricular")}
        >
          <i className="fas fa-hands-helping"></i> Extracurricular
        </button>
        <button
          className={`exp-btn ${activeTab === "certification" ? "active" : ""}`}
          onClick={() => setActiveTab("certification")}
        >
          <i className="fas fa-certificate"></i> Course Certification
        </button>
      </div>

      {activeTab === "all" && (
        <div className="experience-container active" id="all">
          <div className="timeline">{allExperiences.map(renderExperienceItem)}</div>

          <div style={{ marginTop: "2.5rem" }}>
            <h3
              style={{
                margin: "0 0 1.25rem",
                color: "#003366",
                fontSize: "2rem",
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              All Certificates
            </h3>
            <div className="cert-row">{allTabCards.map(renderCard)}</div>
          </div>
        </div>
      )}

      {activeTab === "work" && (
        <div className="experience-container active" id="work">
          <div
            className="cert-box"
            style={{
              border: "1px solid #d1d5db",
              padding: "30px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)",
              boxShadow: "0 15px 35px rgba(0, 51, 102, 0.1)",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <div
              className="tag"
              style={{
                display: "inline-block",
                padding: "6px 15px",
                background: "#003366",
                color: "#ffffff",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "0.75em",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0, 51, 102, 0.2)",
              }}
            >
              {workExperiences[0].tag}
            </div>
            <div className="desc">
              <h3 style={{ margin: "0 0 10px", color: "#1a1a1a", fontSize: "1.5em", fontWeight: 800 }}>
                {workExperiences[0].company}
              </h3>
              <h4 style={{ margin: "0 0 15px", color: "#003366", fontSize: "0.95em", fontWeight: 700 }}>
                {workExperiences[0].role} | {workExperiences[0].period}
              </h4>
              <p style={{ fontSize: "0.95em", color: "#444", lineHeight: 1.7, marginBottom: "25px" }}>
                {workExperiences[0].description}
              </p>
              <div style={{ display: "flex", gap: "12px" }}>{workExperiences[0].links.map(renderLink)}</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "extracurricular" && (
        <div className="experience-container active" id="extracurricular">
          <div className="cert-row">{extracurricularCards.map(renderCard)}</div>
        </div>
      )}

      {activeTab === "certification" && (
        <div className="experience-container active" id="certification">
          <div className="cert-row">{certificationCards.map(renderCard)}</div>
        </div>
      )}
    </section>
  );
}
