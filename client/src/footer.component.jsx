import { Text, Container} from '@mantine/core';
import classes from './footer.module.css';

export default function Footer() {
  return (
    <div id="footer" className={classes.footer} >
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Gabriel.Natividad.Developers. All rights reserved.
        </Text>
      </Container>
    </div>
  );
}