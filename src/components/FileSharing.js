import React from "react";

const FileSharing = () => {
  // Example file data
  const files = [
    { id: 1, name: "Document.pdf", size: "2.3 MB" },
    { id: 2, name: "Image.jpg", size: "1.6 MB" },
    // Add more files here
  ];

  return (
    <div className="file-sharing">
      <h2>File Sharing</h2>
      <div className="file-list">
        {files.map((file) => (
          <div className="file" key={file.id}>
            <div className="file__name">{file.name}</div>
            <div className="file__size">{file.size}</div>
            {/* Add download button or file preview here */}
          </div>
        ))}
      </div>
      <div className="file-upload">
        {/* Add file upload input field and upload button here */}
      </div>
    </div>
  );
};

export default FileSharing;
