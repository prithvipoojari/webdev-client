"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { type CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [modules, setModules] = useState<CourseModule[]>([]);
  useEffect(() => {
    client.findModulesForCourse(courseId).then(setModules);
  }, [courseId]);
  const onCreateModuleForCourse = async (module: { name: string }) => {
    const newModule = await client.createModuleForCourse(courseId, module);
    setModules([...modules, newModule]);
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const onUpdateModule = async (module: CourseModule) => {
    await client.updateModule(module);
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: CourseModule) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  return (
    <div>
      <ModulesControls addModule={onCreateModuleForCourse} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            deleteModule={onRemoveModule}
            editModule={editModule}
            updateModule={updateModule}
            saveModule={onUpdateModule}
          />
        ))}
      </ul>
    </div>
  );
}
