"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Swal from "sweetalert2";

const Skills = () => {
  const { data } = useSession();
  const email = data?.user?.email;

  const [tags, setTags] = useState<string[]>([]);
  const [user, setuser] = useState<object | any>({});

  useEffect(() => {
    axios.get(`/api/users?email=${email}`).then((res) => {
      console.log(res.data.data._id);
      setuser(res?.data?.data);
      setTags(res.data.data.skills)
    });
  }, [email]);

  const handleAddSkills = (tags: string[]) => {
    setTags(tags);
  };

  const handleClick = () => {
    axios
      .patch(`/api/users/${user?._id}`, {
        skills: tags,
      })
      .then((result) => {
        console.log(result);
        if (result.status) {
          Swal.fire("Good", "Skills has added in profile", "success");
        }
      });
  };

  console.log(tags);
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Add your Skills</h1>
      <TagsInput
        className="bg-gray-300 p-3 rounded-lg my-3"
        value={tags}
        inputProps={{
          placeholder: "Add Skills",
        }}
        onChange={handleAddSkills}
      />
      <div className="" onClick={handleClick}>
        <SimpleBtn>Add Skills</SimpleBtn>
      </div>
    </div>
  );
};

export default Skills;
