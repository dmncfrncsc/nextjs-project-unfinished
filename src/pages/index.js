import { Box, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuth) {
      alert("Full access");
      setLoading(false);
    } else {
      router.push("/sign-in");
    }
  }, [isAuth, router]);

  if (isLoading || !isAuth) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography>Full access</Typography>
      </Box>
    );
  }
}
