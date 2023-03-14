import ProfileCard from "components/User/ProfileCard";
import useMyProfile from "hooks/useMyProfile";
import React from "react";

function MyProfile() {
  const { profile } = useMyProfile();

  if (!profile) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="h3">나의 프로필</h1>
      <ProfileCard profile={profile} />
    </div>
  );
}

export default MyProfile;
