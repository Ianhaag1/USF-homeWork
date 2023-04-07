"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");

async function getShowsByTerm(term) {
  const response = await axios.get("http://api.tvmaze.com/search/shows", {
    params: {
      q: term,
    },
  });
  return response.data.map((result) => {
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : "https://tinyurl.com/tv-missing",
    };
  });
}

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${show.name}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

async function getEpisodesOfShow(id) {
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  const episodes = response.data.map((episode) => {
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number,
    };
  });
}
  return episodes;
  function populateEpisodes(episodes) {
    $episodesArea.empty();
    for (let episode of episodes) {
      const $episode = $(`
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${episode.name}</div>
            Season ${episode.season}, Episode ${episode.number}
          </div>
          <div>
            <button class="btn btn-outline-primary btn-sm Episode-getDetails" data-episode-id="${episode.id}">
              Details
            </button>
          </div>
        </li>
      `);
      $episodesArea.append($episode);
    }
    $episodesArea.show();
  }

function populateEpisodes(episodes) {
  $episodesArea.empty();

  for (let episode of episodes) {
    const $episode = $(
      `<li class="list-group-item">
        ${episode.name} (season ${episode.season}, episode ${episode.number})
      </li>`
    );

    $episodesArea.append($episode);
  }

  $episodesArea.show();
}