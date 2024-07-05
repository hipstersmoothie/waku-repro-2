import { StoryContextProvider } from "../../components/Context";
import { ToolsToolbar } from "../../components/ToolsToolbar";

export default async function Story() {
  const page = {
    id: "components-button",
    stories: [
      {
        id: "primary",
      },
    ],
  };
  const story = page.stories[0];

  return (
    <StoryContextProvider page={page} story={story}>
      <ToolsToolbar page={page} story={story} />
    </StoryContextProvider>
  );
}
