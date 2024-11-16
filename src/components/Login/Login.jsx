import React, { useState, useEffect } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { CircularProgress } from "@mui/material";

const styles = {
  loginMain: {
    display: "flex",
  },
  loginLeft: {
    flexGrow: 1,
    height: "90vh",
    backgroundColor: "#E9E9E9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginLeftImg: {
    width: "500px",
  },
  loginRight: {
    height: "80vh",
    flexGrow: 1,
  },
  loginRightContainer: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginRightForm: {
    display: "flex",
    flexDirection: "column",
  },
  loginLogo: {
    alignSelf: "center",
    paddingTop: "50px",
  },
  loginLogoImg: {
    width: "80px",
  },
  loginCenter: {
    textAlign: "center",
  },
  loginCenterH2: {
    fontSize: "35px",
  },
  loginCenterP: {
    fontWeight: 400,
    fontSize: "20px",
    marginBottom: "40px",
  },
  formInput: {
    width: "100%",
    padding: "16px",
    marginBottom: "16px",
    border: "0px",
    borderBottom: "1px solid black",
    outline: "none",
    boxSizing: "border-box",
  },
  passInputDiv: {
    position: "relative",
  },
  passInputSvg: {
    fontSize: "20px",
    position: "absolute",
    right: "10px",
    bottom: "35px",
    cursor: "pointer",
    outline: "none",
  },
  formButton: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: 600,
  },
  loginCenterOptions: {
    display: "flex",
    justifyContent: "space-between",
  },
  rememberDiv: {
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
  },
  rememberDivLabel: {
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    marginTop: "2px",
  },
  forgotPassLink: {
    textDecoration: "none",
    fontSize: "13px",
  },
  forgotPassLinkHover: {
    textDecoration: "underline",
  },
  loginCenterButtons: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
  loginCenterButton1: {
    background: "black",
    color: "white",
    border: "3px solid black",
    transition: "background 1s linear 0ms, color 500ms linear 0ms",
  },
  loginCenterButton1Hover: {
    color: "#333",
    backgroundColor: "white",
  },
  loginCenterButton2: {
    background: "#F0F0F0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
    transition: "background 500ms linear 0ms",
  },
  loginCenterButton2Img: {
    width: "30px",
  },
  loginCenterButton2Hover: {
    background: "#c4c4c4c2",
  },
  loginBottomP: {
    textAlign: "center",
    fontSize: "15px",
    paddingBottom: "40px",
  },
  loginBottomPA: {
    textDecoration: "none",
    fontWeight: 600,
  },
  loginBottomPAHover: {
    textDecoration: "underline",
  },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [isMobileView, setIsMobileView] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    let userName = e.target.userName.value;
    let password = e.target.password.value;
    let cmpCd = e.target.CompanyMst.value;

    if (userName.length > 0 && password.length > 0) {
      const formData = {
        userName,
        password,
        cmpCd,
      };
      try {
        const response = await axios.post(
          "http://192.168.11.77:8081/auth/login",
          formData
        );

        const token = response.data.token;
        dispatch(loginSuccess(token));
        localStorage.setItem("jwtToken", token);

        toast.success("Login successful");
        navigate("/home");
        setLoading(false)
      } catch (err) {
        console.log(err);
        const status = err.response?.status;

        let errorMessage;
        switch (status) {
          case 400:
            errorMessage = "Bad request: Please check your input.";
            break;
          case 401:
            errorMessage =
              "Invalid credentials: Please check your username and password.";
            break;
          case 403:
            errorMessage =
              "Your account is not activated. Please check your email.";
            break;
          case 404:
            errorMessage =
              "User not found: The username entered does not exist.";
            break;
          case 423:
            errorMessage =
              "Your account has been locked due to multiple failed login attempts. Please try again later.";
            break;
          case 500:
            errorMessage =
              "An error occurred on the server. Please try again later.";
            break;
          default:
            errorMessage = "An unexpected error occurred. Please try again.";
        }

        if (!err.response) {
          errorMessage =
            "Unable to connect to the server. Please check your internet connection and try again.";
        }

        setErrorMessage(errorMessage);
        toast.error(err.response?.data?.message || "An error occurred.");
        setLoading(false)
      }
    } else {
      setErrorMessage("Please fill all inputs");
      toast.error("Please fill all inputs");
    }
  };

  return (
    <div style={styles.loginMain}>
      {!isMobileView && (
        <div style={styles.loginLeft}>
          <img src={Image} alt="" style={styles.loginLeftImg} />
        </div>
      )}
      <div style={styles.loginRight}>
        <div style={styles.loginRightContainer}>
          <div style={styles.loginLogo}>
            <img src={Logo} alt="" style={styles.loginLogoImg} />
          </div>
          <div style={styles.loginCenter}>
            <h2 style={styles.loginCenterH2}>Welcome!</h2>
            <p style={styles.loginCenterP}>Please enter your credentials</p>
            {errorMessage && <p style={{ color: "Red" }}>{errorMessage}</p>}
            <form onSubmit={handleLoginSubmit} style={styles.loginRightForm}>
              <input
                type="text"
                placeholder="Company name"
                name="CompanyMst"
                style={styles.formInput}
              />
              <input
                type="text"
                placeholder="Username"
                name="userName"
                style={styles.formInput}
              />
              <div style={styles.passInputDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  style={styles.formInput}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    style={styles.passInputSvg}
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    style={styles.passInputSvg}
                  />
                )}
              </div>

              <div style={styles.loginCenterOptions}>
                <div style={styles.rememberDiv}>
                  <input type="checkbox" id="remember-checkbox" />
                  <label
                    htmlFor="remember-checkbox"
                    style={styles.rememberDivLabel}
                  >
                    Remember for 30 days
                  </label>
                </div>
                <Link
                  // to="/forgot-password"
                  style={styles.forgotPassLink}
                  onMouseEnter={(e) =>
                    (e.target.style = {
                      ...styles.forgotPassLink,
                      ...styles.forgotPassLinkHover,
                    })
                  }
                  onMouseLeave={(e) =>
                    (e.target.style = { ...styles.forgotPassLink })
                  }
                >
                  Forgot password
                </Link>
              </div>

              <div style={styles.loginCenterButtons}>
                <button
                  type="submit"
                  style={{
                    ...styles.formButton,
                    ...styles.loginCenterButton1,
                  }}
                  // onMouseEnter={(e) =>
                  //   (e.target.style = {
                  //     ...styles.formButton,
                  //     ...styles.loginCenterButton1,
                  //     ...styles.loginCenterButton1Hover,
                  //   })
                  // }
                  // onMouseLeave={(e) =>
                  //   (e.target.style = {
                  //     ...styles.formButton,
                  //     ...styles.loginCenterButton1,
                  //   })
                  // }
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" /> 
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* <p style={styles.loginBottomP}>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={styles.loginBottomPA}
                onMouseEnter={(e) =>
                  (e.target.style = {
                    ...styles.loginBottomPA,
                    ...styles.loginBottomPAHover,
                  })
                }
                onMouseLeave={(e) =>
                  (e.target.style = {
                    ...styles.loginBottomPA,
                  })
                }
              >
                Sign up for free
              </Link>
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
