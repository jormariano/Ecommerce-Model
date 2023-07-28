// Clase 14: Firebase II - 1h

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout