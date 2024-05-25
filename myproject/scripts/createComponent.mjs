import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

// Define the component template
const componentTemplate = (componentName) => `
import React, { useState, useEffect } from 'react';
import './${componentName}.css';

interface ${componentName}Props {
    // define props here
}

const ${componentName}: React.FC<${componentName}Props> = (props) => {
    const [state, setState] = useState<string>("");

    useEffect(() => {
        setState("Welcome to my component");
    }, []);

    return (
        <div className="${componentName.toLowerCase()}">
            <h1>{state}</h1>
        </div>
    );
};

export default ${componentName};
`;

const createComponent = (componentName) => {
  // eslint-disable-next-line no-undef
  const baseDir = join(process.cwd(), "src", "components", componentName);
  const componentDir = join(baseDir, "Form");
  const controllerDir = join(baseDir, "Controller");
  const servicesDir = join(baseDir, "Services");
  const sliceDir = join(baseDir, "Slice");
  const componentPath = join(componentDir, `${componentName}.tsx`);
  const controllerPath = join(controllerDir, `${componentName}Controller.ts`);
  const servicesPath = join(servicesDir, `${componentName}Services.ts`);
  const slicePath = join(sliceDir, `${componentName}Slice.ts`);

  [baseDir, componentDir, controllerDir, servicesDir, sliceDir].forEach(
    (dir) => {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    }
  );

  writeFileSync(componentPath, componentTemplate(componentName), "utf8");
  writeFileSync(controllerPath, "", "utf8");
  writeFileSync(servicesPath, "", "utf8");
  writeFileSync(slicePath, "", "utf8");

  console.log(
    `Component ${componentName} created successfully with structure.`
  );
};

// eslint-disable-next-line no-undef
const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name.");
  // eslint-disable-next-line no-undef
  process.exit(1);
}

createComponent(componentName);
