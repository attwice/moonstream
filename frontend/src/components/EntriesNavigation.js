import React, { useRef, useEffect, useContext } from "react";
import { Box, Flex, Spinner, Button, Center } from "@chakra-ui/react";
import { useJournalEntries, useJournalPermissions } from "../core/hooks";
import EntryList from "./EntryList";
import UIContext from "../core/providers/UIProvider/context";

const pageSize = 25;
const isContent = false;

const EntriesNavigation = () => {
  const ui = useContext(UIContext);

  const { currentUserPermissions: permissions } = useJournalPermissions(
    `9b0d7567-4634-4bf7-946d-60ef4414aa93`,
    `personal`
  );

  const loadMoreButtonRef = useRef(null);

  const journalId = `9b0d7567-4634-4bf7-946d-60ef4414aa93`;
  const appScope = `personal`;

  const {
    fetchMore,
    isFetchingMore,
    canFetchMore,
    refetch,
    EntriesPages,
    isLoading,
    setSearchTerm,
  } = useJournalEntries({
    journalId,
    journalType: appScope,
    pageSize,
    isContent,
    searchQuery: ui.searchTerm,
  });

  const handleScroll = ({ currentTarget }) => {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      0.5 * currentTarget.scrollHeight
    ) {
      if (!isFetchingMore && canFetchMore) {
        fetchMore();
      }
    }
  };

  useEffect(() => {
    if (journalId) {
      refetch();
    }
  }, [journalId, ui.searchTerm, refetch, setSearchTerm]);

  const entriesPagesData = EntriesPages
    ? EntriesPages.pages.map((page) => {
        return page.data;
      })
    : [""];

  const entries = entriesPagesData.flat();

  const canCreate =
    appScope !== "public" && permissions?.includes("journals.entries.create");

  const canDelete =
    appScope !== "public" && permissions?.includes("journals.entries.delete");

  return (
    <Box
      id="JournalNavigation"
      height="100%"
      maxH="100%"
      overflow="hidden"
      direction="column"
      flexGrow={1}
    >
      {entries && !isLoading ? (
        <Flex
          className="ScrollableWrapper"
          height="100%"
          maxH="100%"
          overflow="hidden"
          direction="column"
          flexGrow={1}
        >
          <Flex
            className="Scrollable"
            id="entryList"
            // flexGrow={1}
            overflowY="scroll"
            direction="column"
            height="100%"
            onScroll={(e) => handleScroll(e)}
          >
            {entries.map((entry) => (
              <EntryList
                key={`entry-list-${entry.id}`}
                entry={entry}
                disableDelete={!canDelete}
                disableCopy={!canCreate}
              />
            ))}
            {canFetchMore && !isFetchingMore && (
              <Center>
                <Button
                  onClick={() => fetchMore()}
                  variant="outline"
                  colorScheme="suggested"
                >
                  Load more entries
                </Button>
              </Center>
            )}
            {canFetchMore && isFetchingMore && (
              <Center>
                <Spinner
                  hidden={!isFetchingMore}
                  ref={loadMoreButtonRef}
                  my={8}
                  size="lg"
                  color="primary.500"
                  thickness="4px"
                  speed="1.5s"
                />
              </Center>
            )}
          </Flex>
        </Flex>
      ) : (
        <Center>
          <Spinner
            mt="50%"
            size="lg"
            color="primary.500"
            thickness="4px"
            speed="1.5s"
          />
        </Center>
      )}
    </Box>
  );
};

export default EntriesNavigation;
