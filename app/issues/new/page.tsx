"use client";
import React from "react";
import { Button, TextField, TextArea } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        {/* <TextField.Input placeholder = "Title"></TextField.Input> */}
        {/* <TextField.Slot placeHolder = "Title" ></TextField.Slot> */}
      </TextField.Root>
      <SimpleMDE placeholder="Description"></SimpleMDE>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
