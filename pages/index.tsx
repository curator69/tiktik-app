import React from "react";
import axios from "axios";

interface IProps {
  videos: Video[];
}

import VideoCard from "../components/VideoCard";
import { BASE_URL } from "../utils";
import { Video } from "../types";
import NoResults from "../components/NoResults";

export default function Home({ videos }: IProps) {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
      ) : (
        <NoResults text={`No Videos`} />
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/post");

  return {
    props: { videos: data },
  };
};
