import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";

export default function HireDeveloperForm() {
  const [errors, setErrors] = React.useState({});
  const [successMsg, setSuccesMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    if (!formData.service) {
      newErrors.service = "Service is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    const validationErrors = validate();

    const form = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      message: formData.message,
      subject: "",
      service: formData.service,
    };

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, do something with the data (e.g., send to server)
      axios
        .post(
          "https://developer.brandclever.in/brand/admin/form/contactForm.php",
          form
        )
        .then((res) => {
          console.log("res", res.data);
          if (res.data.status) {
            setSuccesMsg(true);
            setFormData({
              name: "",
              email: "",
              number: "",
              message: "",
              service: "",
            });
            setTimeout(() => {
                setSuccesMsg(false)
              }, "7000");
              
            return;
          }
        })
        .catch((error) => {
          console.log("error", error);
          // console.error(error.response.data.error); // Log detailed error message
        });
    }
  };

  return (
    <div className="hire_developer_form error_paragraph">
      <Card
        style={{
          backgroundImage: "linear-gradient(#ed5952, yellow)",
          padding: "15px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Get Consultation Now!</h2>
        <p style={{ textAlign: "center", color: "white" }}>
          Let’s Discuss to Build Something Great Together!
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              fullWidth
              name="name"
              variant="outlined"
              placeholder="Your Name *"
              onChange={handleChange}
              // error={!!errors.name} // Display error state
              helperText={errors.name} // Display error message
              value={formData.name}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              fullWidth
              name="email"
              id="name"
              variant="outlined"
              placeholder="Your Email *"
              onChange={handleChange}
              // error={!!errors.email} // Display error state
              helperText={errors.email} // Display error message
              value={formData.email}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              fullWidth
              id="number"
              name="number"
              variant="outlined"
              placeholder="Your Phone Number"
              onChange={handleChange}
              value={formData.number}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Form.Select
              aria-label="Default select example"
              name="service"
              placeholder="Service *"
              onChange={handleChange}
              className="service_select"
              value={formData.service}
            >
              <option>Select Service *</option>
              <option value="developement">Web Development</option>
              <option value="web_design">Web Design</option>
              <option value="ui/ux">UI/UX</option>
              <option value="ppc">PPC</option>
              <option value="seo">SEO</option>
              <option value="email_marketing">Email Marketing</option>
              <option value="smm">SMM</option>
            </Form.Select>
            {errors.service && <p className="error_mesg">{errors.service}</p>}
            {/* <FormControl fullWidth variant="outlined" >
                            {
                                formData.service ? "" : <InputLabel sx={{ color: "#a2a2a2" }}>Select Service *</InputLabel>
                            }
                            <Select
                                labelId="project-type-label"
                                id="project-type"
                                name="service"
                                placeholder='Service *'
                                onChange={handleChange}
                                error={!!errors.service}
                            >

                                <MenuItem value="developement">Web Development</MenuItem>
                                <MenuItem value="web_design">Web Design</MenuItem>
                                <MenuItem value="ui/ux">UI/UX</MenuItem>
                                <MenuItem value="ppc">PPC</MenuItem>
                                <MenuItem value="seo">SEO</MenuItem>
                                <MenuItem value="email_marketing">Email Marketing</MenuItem>
                                <MenuItem value="smm">SMM</MenuItem>
                            </Select>
                            
                        </FormControl> */}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              fullWidth
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Message *"
              // error={!!errors.message} // Display error state
              helperText={errors.message} // Display error message
              value={formData.message}
            />
          </div>
          <Button variant="contained" type="submit">
            Hire Developer
          </Button>
          {successMsg && (
            <h5 style={{ marginTop: "10px", textAlign: "center",color:"white" }}>
              Form submitted successfully.
            </h5>
          )}
        </form>
      </Card>
    </div>
  );
}
