import React, { memo } from "react";
import { Flex, Box, Button } from "rebass";
import useGlobalStore from "../../stores/useGlobalStore";
export default memo(() => {
  const { store } = useGlobalStore();

  return (
    <Box height={60}>
      <Box
        variant="borderBottom"
        height={60}
        bg="#242828"
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <Flex
          variant="layout.container"
          px={3}
          alignItems="center"
          justifyContent="space-between"
          height={60}
        >
            <Box>

            </Box>
         
          <Box mx="auto" />
          {!store.isLogon ? (
            <Flex alignItems="center">
              {/* <Locations /> */}
              <Button
                variant="medium.primary"
                bg="#333333"
                // onClick={() => pushModal("/login")}
              >
                login
              </Button>
            </Flex>
          ) : (
            <Flex alignItems="center">
              {/* <Profile /> */}
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
});
