import app from './app.js';
import { connectDB } from './db/connection.js';


//connections and listeners 
connectDB().then(() => {

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
})
  
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error); 

});

