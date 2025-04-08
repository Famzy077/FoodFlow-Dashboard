'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import profileImg from '/public/images/profile-img-mock.png';
import { useState, useEffect } from "react";

export default function ProfileImage() {
  const pathname = usePathname();
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [uploadError, setUploadError] = useState(null); // State to handle upload errors

  // Load the image from local storage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  // Handle file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadError("Please upload a valid image file (JPEG, PNG, etc.).");
        return;
      }

      // Validate file size (e.g., 5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("File size must be less than 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setSelectedImage(imageDataUrl); // Set the selected image as a data URL
        setUploadError(null); // Clear any previous errors

        // Save the image data URL to local storage
        localStorage.setItem('profileImage', imageDataUrl);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null); // Clear the selected image
    setUploadError(null); // Clear any errors

    // Remove the image from local storage
    localStorage.removeItem('profileImage');
  };

  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full w-[100px] h-[100px] overflow-hidden relative">
        <Image
          src={selectedImage || profileImg} // Use the selected image or fallback to the default profile image
          alt="profile-image"
          width={100}
          height={100}
          quality={80}
          className="object-cover w-full h-full"
        />
        {selectedImage && (
          <button
            onClick={handleRemoveImage}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            aria-label="Remove profile image"
          >
            ×
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span>Profile photo</span>
        <span>600 x 600 or larger recommended</span>
        {pathname === '/settings/profile' && (
          <div className="flex flex-col gap-2">
            <input
              type="file"
              id="profile-upload"
              accept="image/*" // Accept only image files
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="profile-upload"
              className="w-32 h-8 rounded-3xl bg-primary text-white font-light text-sm flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors"
            >
              Upload photo
            </label>
            {uploadError && (
              <span className="text-red-500 text-sm">{uploadError}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}