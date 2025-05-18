"use client";
import { Button, TextField, TextArea } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        {/* <TextField.Input placeholder = "Title"></TextField.Input> */}
        {/* <TextField.Slot placeHolder = "Title" ></TextField.Slot> */}
      </TextField.Root>
      <TextArea placeholder="Description"></TextArea>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
