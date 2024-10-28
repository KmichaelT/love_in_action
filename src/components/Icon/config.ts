import * as lucide from "lucide-react";
import { SelectField } from 'payload';

export const icon: SelectField = {
  type: "select",
  name: "icon",
  options: Object.keys(lucide).filter((v) => !["default", "icons"].includes(v) && !v.startsWith("Lucide") && !v.endsWith("Icon")),
  // TODO add components to show Icon in admin dashboard once docs for this are ready
  // admin: {
  //   components: {
  //     Cell,
  //     Field
  //   }
  // }
}