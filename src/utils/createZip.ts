import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const createZip = async (files: { [key: string]: string }) => {
  const zip = new JSZip();

  // Add files to the zip
  Object.entries(files).forEach(([filename, content]) => {
    zip.file(filename, content);
  });

  // Generate the zip file
  const zipBlob = await zip.generateAsync({ type: 'blob' });

  // Save the zip file
  saveAs(zipBlob, 'cloud-compliance-project.zip');
};

export default createZip;