import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ResumeHeader from "../resume/ResumeHeader";
import RoleTrackSelector from "../resume/RoleTrackSelector";
import ImpactTelemetry from "../resume/ImpactTelemetry";
import StoryJourneyView from "../resume/StoryJourneyView";
import SkillMatrix from "../resume/SkillMatrix";
import ClassicAtsView from "../resume/ClassicAtsView";

const ResumeSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from URL params if present, fallback to "all" and "story"
  const initialRole = searchParams.get("role") || "all";
  const initialView = searchParams.get("view") || "story";

  const [activeRole, setActiveRole] = useState(initialRole);
  const [viewMode, setViewMode] = useState(initialView);

  // Sync state to URL params cleanly
  useEffect(() => {
    const params = {};
    if (activeRole !== "all") params.role = activeRole;
    if (viewMode !== "story") params.view = viewMode;
    setSearchParams(params, { replace: true });
  }, [activeRole, viewMode, setSearchParams]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-2 px-2 sm:px-4">
      {/* Resume Top Header with Identity, Pill Mode Switcher & Download Dropdown */}
      <ResumeHeader
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* 5-Track Role Switcher */}
      <RoleTrackSelector
        activeRole={activeRole}
        setActiveRole={setActiveRole}
      />

      {/* Dual Mode Dynamic Rendering */}
      {viewMode === "story" ? (
        <div className="space-y-10 animate-in fade-in duration-200">
          {/* Quantified Telemetry Ribbon */}
          <ImpactTelemetry activeRole={activeRole} />

          {/* Interactive Chronological Narrative Rail & Drawers */}
          <StoryJourneyView activeRole={activeRole} />

          {/* Contextual Skill Matrix */}
          <SkillMatrix activeRole={activeRole} />
        </div>
      ) : (
        <div className="animate-in fade-in duration-200">
          {/* Classic ATS / Single Page Clean Layout */}
          <ClassicAtsView activeRole={activeRole} />
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
