import classes from './Login.module.css';

export function Login() {
  return (
    <div className={classes.login}>
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      {/* Add login form here */}
    </div>
  );
}