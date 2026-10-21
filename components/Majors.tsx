"use client";

import {
  Briefcase,
  Building2,
  Code,
  Cpu,
  HeartPulse,
  Landmark,
  Languages,
  Pill,
  Settings,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { MAJORS, type MajorIcon } from "@/lib/content";
import { useSearch } from "./SearchProvider";

const ICONS: Record<MajorIcon, LucideIcon> = {
  heart: HeartPulse,
  building: Building2,
  pill: Pill,
  zap: Zap,
  languages: Languages,
  settings: Settings,
  code: Code,
  briefcase: Briefcase,
  landmark: Landmark,
  stethoscope: Stethoscope,
  cpu: Cpu,
};

export default function Majors() {
  const { search } = useSearch();

  return (
    <section className="section" id="majors">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Major Trends</h2>
          <p>Finding the perfect major for your skills and interests</p>
        </div>
        <div className="majors-grid">
          {MAJORS.map((major, i) => {
            const Icon = ICONS[major.icon];
            return (
              <button
                className="major-card reveal"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                onClick={() => search(major.name)}
                key={major.name}
              >
                <span className="major-icon">
                  <Icon size={34} />
                </span>
                <span className="major-name">{major.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
