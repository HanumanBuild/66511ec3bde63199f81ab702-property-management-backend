const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DBNAME = process.env.MONGODB_DBNAME;

app.use(cors()); // Add this line to enable CORS for all origins
app.use(express.json());

mongoose.connect(`${MONGODB_URI}/${MONGODB_DBNAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Property Management Backend');
});

const companyInfo = {
  name: "Property Management Company",
  description: "We offer comprehensive property management services to ensure your properties are well-maintained and profitable.",
  serviceAvailability: "24/7"
};

const services = [
  { id: 1, name: "Property Maintenance" },
  { id: 2, name: "Tenant Management" },
  { id: 3, name: "Rent Collection" },
  { id: 4, name: "Financial Reporting" }
];

const testimonials = [
  { id: 1, name: "John Doe", feedback: "This company has been a lifesaver for managing my properties!" },
  { id: 2, name: "Jane Smith", feedback: "Excellent service and support. Highly recommend!" }
];

app.get('/api/company-info', (req, res) => {
  res.json(companyInfo);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});