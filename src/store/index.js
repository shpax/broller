import get from "lodash/get";

export default class Store {
  constructor({ awards, levels, roller, videos }) {
    this.awards = awards;
    this.levels = levels.sort((a, b) => a.difficulty - b.difficulty);
    this.roller = roller;
    this.videos = videos;

    console.log(this);
  }

  updateRoller(data) {
    return new Store({ ...this, roller: { ...this.roller, ...data } });
  }

  getMappedAwards() {
    return this.awards.map((award) => ({
      ...award,
      isOpened: this.roller.awardIds.includes(award.id),
      rollerVideo: get(
        this.videos.find((v) => v.awardId === award.id),
        "video",
        null
      ),
      videos: award.video ? award.video.split(",") : [],
    }));
  }

  getMappedAwardById(id) {
    return this.getMappedAwards().find((award) => award.id === id);
  }

  getMappedAwardsByLevel() {
    return this.levels.map((lvl) => ({
      ...lvl,
      awards: this.getMappedAwards().filter(
        (award) => award.levelId === lvl.id
      ),
    }));
  }

  getCurrentLevel() {
    const levels = this.getMappedAwardsByLevel();

    if (!this.roller.levelId) return null;
    return levels.find((lvl) => lvl.id === this.roller.levelId);
  }

  getNextLevel() {
    const currentLvl = this.getCurrentLevel();

    const levels = this.getMappedAwardsByLevel();

    if (!currentLvl) return levels[0];

    return (
      levels.find(
        (lvl, i) => get(this.levels[i - 1], "id") === currentLvl.id
      ) || null
    );
  }

  getLevelById(id) {
    return this.levels.find((lvl) => lvl.id === id);
  }

  getRoller() {
    return this.roller;
  }
}
