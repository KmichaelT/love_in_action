import pages from './pages.json' with { type: "json" };

function modifyRichText(obj) {
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      const value = obj[key];

      // Skip keys named "en" or "de"
      if (key === 'en' || key === 'de') {
        continue;
      }

      // Check if the value matches the format { root: { children: [...] } }
      if (
        value &&
        typeof value === 'object' &&
        value.root &&
        typeof value.root === 'object' &&
        Array.isArray(value.root.children)
      ) {
        // Wrap the object in an "en" key
        obj[key] = { en: value, de: value };
      } else if (typeof value === 'object') {
        // Recursively process nested objects
        modifyRichText(value);
      }
    }
  }
  return obj;
}

// Example input object
const input = {
  richtText: {
    root: { children: ["A", "B"] }
  },
  someOtherProp: {
    richtText: {
      root: { children: ["C", "D"] }
    },
    anotherNestedProp: {
      otherText: {
        root: { children: ["E", "F"] }
      },
      en: {
        root: { children: ["Skipped", "Value"] }
      }
    }
  },
  de: {
    richtText: {
      root: { children: ["Skipped"] }
    }
  }
};

// Modify the object
const modifiedObject = modifyRichText(pages);

console.log(JSON.stringify(modifiedObject, null, 2));
