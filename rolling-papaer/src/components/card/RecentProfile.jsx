function RecentProfile({ result }) {
  const list = result.recentMessages.map((image) => {
    return (
      <img key={image.id} src={image.profileImageURL} alt={image.sender} />
    );
  });

  return list;
}
export default RecentProfile;
