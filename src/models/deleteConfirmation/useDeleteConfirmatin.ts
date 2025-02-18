import { useState } from "react";

export const useConfirmChoice = () => {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [actionToConfirm, setActionToConfirm] = useState<() => Promise<void>>();

  const requestConfirmation = (action: () => Promise<void>) => {
    setIsConfirmVisible(true);
    setActionToConfirm(() => action);
  };

  const confirmAction = async () => {
    if (actionToConfirm) {
      await actionToConfirm();
    }
    setIsConfirmVisible(false);
    setActionToConfirm(undefined);
  };

  const cancelAction = () => {
    setIsConfirmVisible(false);
    setActionToConfirm(undefined);
  };

  return {
    isConfirmVisible,
    requestConfirmation,
    confirmAction,
    cancelAction,
  };
};
