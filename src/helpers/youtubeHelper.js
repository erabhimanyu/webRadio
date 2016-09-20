export default {

	checkURL(url) {
		let youtube_id
		if (url.match('https://(www.)?youtube|youtu\.be')) {
		    if (url.match('embed')) { youtube_id = url.split(/embed\//)[1].split('"')[0]; }
		    else { youtube_id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; }
		    return youtube_id
	}
	else {
		return false
	}
 },
 convertToSeconds(input) {

        var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        var hours = 0, minutes = 0, seconds = 0, totalseconds;

        if (reptms.test(input)) {
            var matches = reptms.exec(input);
            if (matches[1]) hours = Number(matches[1]);
            if (matches[2]) minutes = Number(matches[2]);
            if (matches[3]) seconds = Number(matches[3]);
            totalseconds = hours * 3600  + minutes * 60 + seconds;
        }

        return (totalseconds);
    }
}