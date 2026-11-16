import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import { type CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  deleteModule,
  editModule,
  updateModule,
  saveModule,
}: {
  module: CourseModule;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  saveModule: (module: CourseModule) => void;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span>
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={module.name}
              onChange={(e) => updateModule({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveModule({ ...module, editing: false });
                }
              }}
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={deleteModule}
          editModule={editModule}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
