import React from "react";
import { ImageUploader } from "./imageUploader";

export interface ImageCardProps {
  imageUrl: string | null;
  onImageChage: (value: File | null) => unknown;
}

const ProgressBar: React.FC<ImageCardProps> = ({ imageUrl, onImageChage }) => {
  return (
    <div>
      <ImageUploader onValueChange={onImageChage} value={imageUrl} />
    </div>
  );
};

export { ProgressBar };
