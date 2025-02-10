import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NoteComponent } from "./Note";
import { useEnterprisesStore } from "../../states/enterprisesState";
import { NotesDefault } from "../../generated/graphql";
import { EmptyStateComponent } from "../EmptyState/EmptyState";

type ListNotesComponentsProps = {
  enterpriseId: string;
};

export const ListNotesComponent = (props: ListNotesComponentsProps) => {
  const { notes, setNotes } = useEnterprisesStore();

  const addNote = () => {
    setNotes([{ enterpriseId: props.enterpriseId, note: undefined }, ...notes]);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography color="primary" className={`font-bold`}>
          Notes about this enterprise
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Button variant="contained" onClick={addNote}>
          New Note
        </Button>
        <Divider className={`w-full my-4`} />
        {notes.map((note: NotesDefault, index) => (
          <NoteComponent
            key={note.id ?? index}
            enterpriseId={props.enterpriseId}
            note={note}
          />
        ))}
        {notes.length === 0 && (
          <>
            <EmptyStateComponent />
            <Button
              variant="contained"
              className="table mx-auto my-4"
              onClick={addNote}
            >
              Create First
            </Button>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
