
import React from 'react';
import { clients } from '../constants';

const Clients: React.FC = () => (
  <section className="flex justify-center items-center my-4 sm:my-16">
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map((client) => (
        <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;