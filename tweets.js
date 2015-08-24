window.onload = function() {
    main();
};

function main() {
    var color = "grey";
    var paper = Raphael(650, 100, 700, 700);
    //var anim = Raphael.animation({transform: "r360"}, 2500).repeat(Infinity);
    var row = Math.sqrt(amitabh.length);
    var arr = [];
    s();
    bubble(row, row);

    function bubble(cols, rows) {
        var count = 0,
            left_shift = 350,
            top_shift = 300,
            main_radius = 40,
            step = 2 * Math.PI / 70,
            angle = 0;
        for (i = 0; i < amitabh.length; i++) {
            if (angle < 2 * Math.PI) {
                var x = left_shift + main_radius * Math.cos(angle);
                var y = top_shift - main_radius * Math.sin(angle);
                count++;
                var radius = amitabh[count].retweet_count / 70;

                if (arr[count].theme == "cinema")
                    color = "red";
                else if (arr[count].theme == "sport")
                    color = "pink";
                else if (arr[count].theme == "family")
                    color = "green";
                else if (arr[count].theme == "kbc")
                    color = "orange";
                else if (arr[count].theme == "india")
                    color = "lightblue";
                else if (arr[count].theme == "love")
                    color = "purple";
                var c = paper.circle(x, y, radius)
                    .attr({
                        "fill": color,
                        "stroke": "none",
                        "cursor": "pointer",
                        "title": "@Amitabh Bachchan : " + amitabh[count].text
                    });
                //c.animate(anim);
                angle += step;
            } else {
                angle = 0;
                main_radius = main_radius + 20;
            }
        }
    }

    function s() {

        for (i = 0; i < amitabh.length; i++) {
            var set = amitabh[i].text;
            arr.push({
                text: set,
                retweet_count: amitabh[i].retweet_count
            });
            if (amitabh[i].text.match(/(cinema|trailer|song|movie|film)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "cinema"
                });
            else if (amitabh[i].text.match(/(sport|game|world cup|cricket|football|kabaddi|goal)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "sport"
                });
            else if (amitabh[i].text.match(/(family)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "family"
                });
            else if (amitabh[i].text.match(/kbc/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "kbc"
                });
            else if (amitabh[i].text.match(/india/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "india"
                });
            else if (amitabh[i].text.match(/(peace|happiness|love|fun|great|fantastic|wonderful|incredible|brilliant)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "love"
                });
        }

    }
}