import { pdf } from "@react-pdf/renderer";

export async function render(doc: any) {
  return await pdf(doc).toBuffer();
}
