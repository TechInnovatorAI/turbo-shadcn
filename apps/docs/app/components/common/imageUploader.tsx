"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ImageUploadInput } from "./imageUploadInput";
import User from "../../../public/images/user.svg";
import Plus from "../../../public/images/icon-cart-plus.svg";
import Close from "../../../public/images/icon-cart-close.svg";

export function ImageUploader(
  props: React.PropsWithChildren<{
    value: string | null | undefined;
    onValueChange: (value: File | null) => unknown;
  }>,
) {
  const [image, setImage] = useState(props.value);

  const { setValue, register } = useForm<{
    value: string | null | FileList;
  }>({
    defaultValues: {
      value: props.value,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const control = register("value");

  const onClear = useCallback(() => {
    props.onValueChange(null);
    setValue("value", null);
    setImage("");
  }, [props, setValue]);

  const onValueChange = useCallback(
    ({ image, file }: { image: string; file: File }) => {
      props.onValueChange(file);

      setImage(image);
    },
    [props],
  );

  const Input = () => (
    <ImageUploadInput
      {...control}
      accept={"image/*"}
      className={"absolute h-full w-full"}
      visible={false}
      multiple={false}
      onValueChange={onValueChange}
    />
  );

  useEffect(() => {
    setImage(props.value);
  }, [props.value]);

  if (!image) {
    return (
      <FallbackImage descriptionSection={props.children}>
        <Input />
      </FallbackImage>
    );
  }

  return (
    <div className={"rounded-lg h-[158px] flex justify-center"}>
      <label className={"relative h-full w-28 animate-in fade-in zoom-in-50"}>
        <Image
          fill
          className={"h-40 w-20 rounded-xl object-cover"}
          src={image}
          alt={""}
        />

        <Input />
      </label>
      <div className="absolute right-0 bottom-0" onClick={onClear}>
        <Image src={Close} alt="Roast Logo" />
      </div>
    </div>
  );
}

function FallbackImage(
  props: React.PropsWithChildren<{
    descriptionSection?: React.ReactNode;
  }>,
) {
  return (
    <div
      className={
        "rounded-lg border-2 text-white border-[#8F8F8F] border-dashed h-[158px] flex justify-center items-center"
      }
    >
      <label className="w-full h-full flex justify-center items-center">
        <div className={"relative h-9 w-9 animate-in fade-in zoom-in-50"}>
          <Image alt="User Icon" src={User} />
          {props.children}
        </div>

        <div className="absolute right-0 bottom-0">
          <Image src={Plus} alt="Roast Logo" />
        </div>
      </label>

      {props.descriptionSection}
    </div>
  );
}
