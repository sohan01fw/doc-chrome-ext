interface aimsg {
  user: string;
  ai: string;
}

const AiMsg = ({ ai, user }: aimsg) => {
  return (
    <>
      {user && (
        <div>
          <h3>{user}</h3>
        </div>
      )}
      {ai && (
        <div>
          <h3>{ai}</h3>
        </div>
      )}
    </>
  );
};
export default AiMsg;
