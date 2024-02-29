import axios from "axios";
import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";

import { FaFire } from "react-icons/fa6";
import { IoFootsteps } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";

import img1 from "../../public/img-1.png";

const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  return (
    <div>
      <header className="flex justify-between mb-4">
        <div>
          <h2>Hey, Natanem</h2>
          <p>Let's track your workouts.</p>
        </div>

        <Input />
      </header>
      <section className="flex">
        <div>
          <div className="stepts p-4 flex gap-4 items-center">
            <IoFootsteps className="p-2" />
            <div>
              <h3>5000</h3>
              <p>Total Steps</p>
            </div>
          </div>
          <div className="calories">
            <FaFire />
            <div>
              <h3>5000</h3>
              <p>Total Steps</p>
            </div>
          </div>
          <div className="distance">
            <GiPathDistance />
            <div>
              <h3>5000</h3>
              <p>Total Steps</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Profile;
