import classes from './Home.module.css';

export function Home() {
  return (
    <div className={classes.home}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area.</p>
    </div>
  );
}