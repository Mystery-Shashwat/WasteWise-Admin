import React, { useState } from 'react';

const VideoUploader = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };

  const handleUpload = async () => {
    try {
      if (!selectedVideo) {
        console.error('No video selected');
        return;
      }

      const formData = new FormData();
      formData.append('video', selectedVideo, selectedVideo.name);
      console.log(selectedVideo);
      const response = await fetch('http://localhost:3001/api/group/video', {
        method: 'POST',
        files: formData,
      });

      if (response.ok) {
        console.log('Video uploaded successfully!');
        // Handle success, display a success message, or perform any other actions
      } else {
        console.error('Error uploading video');
        // Handle error, display an error message, or perform any other actions
      }
    } catch (error) {
      console.error(error);
      // Handle error, display an error message, or perform any other actions
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload} disabled={!selectedVideo}>
        Upload Video
      </button>
    </div>
  );
};

export default VideoUploader;
