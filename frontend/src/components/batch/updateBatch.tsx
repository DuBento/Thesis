"use client";

import BlockchainServices, {
  Batch,
  PartialUpdate,
} from "@/services/BlockchainServices";
import { useContext, useState } from "react";
import { BatchContext } from "@/context/batchContext";
import NotificationContext from "@/context/notificationContext";
import { ethers } from "ethers";
import { formSubmit } from "@/app/batch/page";

const UpdateBatch = ({}) => {
  const { batch } = useContext(BatchContext);
  const notifications = useContext(NotificationContext);

  const [document, setDocument] = useState<string>(
    ethers.utils.formatBytes32String("Update document test hash")
  );

  const handlePushNewEvent = async (
    batch: Batch | undefined,
    partialEvent: PartialUpdate
  ) => {
    try {
      if (batch === undefined) throw new Error("No batch to be updated");
      await BlockchainServices.pushNewUpdate(batch.id, partialEvent);
      notifications.notify("New event pushed");
    } catch (error: any) {
      console.error(error);
      notifications.error(error.message);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-mono">Push new event</h2>
        <label htmlFor="fid" className="text-base leading-6">
          Document
        </label>
        <div className="my-2 ">
          <input
            id="ftxdocument"
            name="ftxdocument"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 
              bg-coolgray-500 text-coolgray-200 shadow ring-1 ring-inset ring-coolgray-500 placeholder:text-gray-400
              sm:text-sm sm:leading-6"
            value={document}
            disabled
          />
        </div>
        <button
          className="my-4 px-2 py-1.5 rounded bg-red-300 font-bold hover:bg-red-200 hover:text-white hover:font-extrabold"
          onClick={(e) =>
            formSubmit(e, () =>
              handlePushNewEvent(batch, { documentHash: document })
            )
          }
        >
          Push new update
        </button>
      </div>
    </>
  );
};

export default UpdateBatch;
