import { Group, Button, MantineProvider } from '@mantine/core';
import classes from "../Style/Color.module.scss"

function Color() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'gray': ["#40404c","#e4e6ed", "#c8cad3", "#a9adb9", "#9093a4", "#808496", "#767c91", "#656a7e", "#585e72", "#4a5167"],
          'bright-pink': ["#e5feee", "#d2f9e0", "#a8f1c0", "#7aea9f", "#53e383", "#3bdf70", "#2bdd66", "#1ac455", "#0caf49", "#00963c"
          ],
        },
      }}

    >
      <Group className={classes["Color__Group"]}>
        <Button color="gray">Gray button</Button>
        <Button color="green" variant="filled">
          Green button
        </Button>
      </Group>
    </MantineProvider>
  );
}
export default Color