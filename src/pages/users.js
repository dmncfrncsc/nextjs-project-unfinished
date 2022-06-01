import React from "react";
import AdminLayout from "../components/AdminLayout";

export default function Users() {
  return <div>user page</div>;
}

Users.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
