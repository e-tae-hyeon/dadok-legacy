import { Proflie } from "apis/types";
import Card from "components/@Base/Card";
import React from "react";

type Props = {
  profile: Proflie;
};

function ProfileCard({ profile }: Props) {
  const { name, description } = profile;
  return (
    <Card>
      <div className="flex flex-col gap-4 px-4 py-8 w-60 aspect-video">
        <h1 className="h3">{name}</h1>
        <div className="text-neutral-400">{description}</div>
      </div>
    </Card>
  );
}

export default ProfileCard;
