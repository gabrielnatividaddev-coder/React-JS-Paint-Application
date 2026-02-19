import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './mobilepage.module.css';

export function MobilePage() {
  return (
    <Container pt={10} className={classes.root}>
      <div className={classes.label}>405</div>
      <Title className={classes.title}>You have found an application that runs only on computers and laptops/tablets.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Good day viewers! This application is only made for computers laptops/tablets we have no
        support for mobile version. Please open on your tablet or laptop or computer. 
      </Text>
    </Container>
  );
}