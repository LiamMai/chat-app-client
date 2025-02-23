const REGEX =  {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: {
    NO_SPACE: /^\S+$/,
    VALID_CHAR:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~#?!@$%^&*_\-()`)]).{8,20}$/,
  }

}
export default  REGEX
