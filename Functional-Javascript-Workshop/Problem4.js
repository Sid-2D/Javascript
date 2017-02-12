function getShortMessages(messages) {
	return messages.filter((obj) => (obj.message.length < 50))
				   .map((obj) => (obj.message));
}
console.log(getShortMessages([{"message": "asddfadfa"}, {"message": "awefaefEFAEF"}, {"message": "DdfdfadfadfadvadvadvadvbjkajdbvajvdshjDJHADJHADVJADHVAJDHBVAJBDVKAJVBDJADMDMADMAMDVAKDJVADVADVBDKBkbkdbvkajdvbkjadvjadjadj"}]));
module.exports = getShortMessages;