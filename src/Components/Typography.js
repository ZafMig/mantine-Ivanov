import { Title, MantineProvider } from '@mantine/core';
import classes from '../Style/Typography.module.scss';

function Typography() {
  return (
    <MantineProvider
      theme={{
        components: {
          Title: Title.extend({
            classNames: {
              root: classes.heading,
            },
          }),
        },
      }}
    >
      <Title order={1}>Root 1</Title>
      <Title order={2}>Root 2</Title>
      <Title order={3}>Root 3</Title>
      <Title order={4}>Root 4</Title>
      <Title order={5}>Root 5</Title>
      <Title order={6}>Root 6</Title>
    </MantineProvider>
  );
}
export default Typography;