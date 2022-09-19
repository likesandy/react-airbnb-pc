import request from "@/utils/request";

export function homeHighscore() {
  return request.get({
    url: "/home/highscore",
  });
}
